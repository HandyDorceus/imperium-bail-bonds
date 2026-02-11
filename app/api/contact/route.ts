import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, inmateName, inmateDob, message } = body

    // For now, just log the data
    // In production, you would integrate with Resend or another email service
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      inmateName,
      inmateDob,
      message
    })

    // TODO: Integrate with Resend
    // Example:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: process.env.CONTACT_EMAIL || 'info@imperiumbailbonds.com',
    //   subject: `New Contact Form Submission from ${name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone}</p>
    //     ${inmateName ? `<p><strong>Inmate Name:</strong> ${inmateName}</p>` : ''}
    //     ${inmateDob ? `<p><strong>Inmate Date of Birth:</strong> ${inmateDob}</p>` : ''}
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `,
    // });

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    )
  }
}
