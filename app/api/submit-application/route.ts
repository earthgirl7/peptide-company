import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    console.log('Received form data:', formData);

    // Airtable configuration
    const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
    const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
    const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME || 'Applications';

    console.log('Airtable config:', {
      hasApiKey: !!AIRTABLE_API_KEY,
      baseId: AIRTABLE_BASE_ID,
      tableName: AIRTABLE_TABLE_NAME
    });

    if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
      console.error('Missing Airtable configuration');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Prepare the record for Airtable
    const airtableRecord = {
      fields: {
        Name: formData.name,
        Email: formData.email,
        Location: formData.location,
        Compounds: formData.compounds, // Send as array for Multiple Select field
        Goals: formData.goals,
        Experience: formData.experience || '',
        Background: formData.background || '',
        Referral: formData.referral || '',
        'Consent given': formData.consent, // Fixed capitalization
        'Budget confirmed': formData.budget, // Fixed capitalization
        // Note: 'Submitted at' is auto-filled by Airtable (createdTime field)
      },
    };

    // Send to Airtable
    const airtableResponse = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(airtableRecord),
      }
    );

    if (!airtableResponse.ok) {
      const errorData = await airtableResponse.json();
      console.error('Airtable API error response:', JSON.stringify(errorData, null, 2));
      console.error('Status:', airtableResponse.status);
      return NextResponse.json(
        { error: 'Failed to submit application', details: errorData },
        { status: 500 }
      );
    }

    const result = await airtableResponse.json();

    return NextResponse.json(
      { success: true, id: result.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Submission error:', error);
    return NextResponse.json(
      { error: 'Failed to process submission' },
      { status: 500 }
    );
  }
}
