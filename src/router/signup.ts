import express, { Request, Response, NextFunction } from 'express'
import { User } from '../models/user'
import { body, validationResult } from 'express-validator'
import RequestValidationError from '../errors/request-validation-error'
import BadRequestError from '../errors/bad-request-error'

const router = express.Router()
const validators = [
  body('email').isEmail().withMessage('Email must be valid'),
  body('password')
    .trim()
    .isLength({ min: 4, max: 20 })
    .withMessage('Password must be between 4 and 20 characters')
]

router.post(
  '/signup',
  validators,
  async (req: Request, res: Response, next: NextFunction) => {
    // Validation stuff
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return next(new RequestValidationError(errors.array()))
    }

    const { email, password } = req.body
    const existingUser = await User.findOne({ email })
    if (existingUser) return next(new BadRequestError('Email in use'))

    const user = User.build({ email, password })
    await user.save()

    res.status(201).send(user)
  }
)

export default router
