import { Request, Response } from 'express'
import { format } from 'date-fns'

export const InfoController = (req: Request, res: Response) => {
  const buildTime = process.env.BUILD_TIMESTAMP
  res.status(200).send({
    status: 'OK',
    buildTime: buildTime ? format(Number(buildTime), 'd MMMM yyyy, hh:mm:ss') : undefined,
  })
}
