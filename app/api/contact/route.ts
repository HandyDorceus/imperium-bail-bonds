import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, inmateName, inmateDob, message } = body

    // Log the data for debugging
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      inmateName,
      inmateDob,
      message
    })

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'your_resend_api_key_here') {
      console.warn('RESEND_API_KEY not configured. Email will not be sent.')
      return NextResponse.json(
        { message: 'Form submitted successfully (email not configured)' },
        { status: 200 }
      )
    }

    // Send email via Resend
    const emailData = await resend.emails.send({
      from: 'Imperium Bail Bonds <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'info@imperiumbailbonds.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #1e3a5f; color: #f5a623; padding: 20px; text-align: center; }
              .content { background-color: #f9f9f9; padding: 20px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #1e3a5f; }
              .value { margin-top: 5px; }
              .footer { margin-top: 20px; padding: 10px; text-align: center; font-size: 12px; color: #666; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>New Contact Form Submission</h2>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name:</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
                <div class="field">
                  <div class="label">Phone:</div>
                  <div class="value"><a href="tel:${phone}">${phone}</a></div>
                </div>
                ${inmateName ? `
                <div class="field">
                  <div class="label">Inmate Name:</div>
                  <div class="value">${inmateName}</div>
                </div>
                ` : ''}
                ${inmateDob ? `
                <div class="field">
                  <div class="label">Inmate Date of Birth:</div>
                  <div class="value">${inmateDob}</div>
                </div>
                ` : ''}
                <div class="field">
                  <div class="label">Message:</div>
                  <div class="value">${message.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
              <div class="footer">
                <p>This email was sent from the Imperium Bail Bonds contact form.</p>
                <p>Submitted on ${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })} PST</p>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    console.log('Email sent successfully:', emailData)

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
