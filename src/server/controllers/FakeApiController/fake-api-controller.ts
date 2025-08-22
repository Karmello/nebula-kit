import { Request, Response } from 'express'

export const FakeApiController = (req: Request, res: Response) => {
  const action = req.params.action

  switch (action) {
    case 'login': {
      const { username, password } = req.body

      if (username === 'username' && password === 'password') {
        res.status(200).send({ success: 'Authenticated' })
      } else {
        res.status(400).send({ error: 'Wrong credentials' })
      }
      break
    }

    case 'get-recovery-link': {
      const { email } = req.body

      if (email === 'username@domain.com') {
        res.status(200).send({ info: 'Link sent' })
      } else {
        res.status(400).send({ errors: { email: 'Not found' } })
      }
      break
    }

    case 'recover-password': {
      const { newPassword } = req.body
      if (newPassword === 'password') {
        res.status(200).send({ success: 'Password updated' })
      } else {
        res.status(400).send({ error: 'Something went wrong' })
      }

      break
    }

    case 'register': {
      res.status(200).send({ success: 'User created' })
      break
    }

    case 'user-update': {
      res.status(200).send({ success: 'User updated' })
      break
    }

    case 'password-update': {
      res.status(200).send({ success: 'Password updated' })
      break
    }

    case 'avatar-upload': {
      res.status(200).send({ success: 'Avatar uploaded' })
      break
    }

    default: {
      res.status(200).send()
    }
  }
}
