// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
    try {
        const { data, error } = await resend.emails.send({
            from: 'Gaspare Carollo <gasparecarollo@pursuit.org>',
            to: ['gasparecarollo@pursuit.org'],
            subject: 'Hello world',
            react: (<><p>Email Body</p></>
            )
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}