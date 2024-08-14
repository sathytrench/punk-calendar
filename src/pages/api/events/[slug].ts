import type { NextApiRequest, NextApiResponse } from 'next'
// import { db } from '~/server/db'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("Events API route: ", req.query)

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  if (!req.query.slug) {
    return res.status(400).json({ error: 'Slug is required and must be a string' })
  }

  const slug = req.query.slug
  const validSlug = Array.isArray(slug) ? slug[0] : slug

  // const event = await db.event.findUnique({ where: { slug } })

  try {
    res.status(200).send({
      id: 1,
      name: `Test Event: ${validSlug}`, 
      slug: slug,
      location: 'Test Location',
      title: 'Test Title',
      description: 'Test Description',
      startDate: new Date(),
      endDate: new Date(),
      tags: ['test', 'tag'],
    })
  } catch (error) {
    console.error('Error fetching audio:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}