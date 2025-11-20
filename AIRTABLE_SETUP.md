# Airtable Setup Guide

This guide will help you set up Airtable to receive application form submissions.

## Step 1: Create an Airtable Account

1. Go to [airtable.com](https://airtable.com) and sign up for a free account
2. You'll get a workspace where you can create bases (databases)

## Step 2: Create Your Base

1. Click "Add a base" or "Create a base"
2. Choose "Start from scratch"
3. Name it something like "Peptide Research Applications"

## Step 3: Set Up Your Table

1. Rename the default table to "Applications" (or use a custom name)
2. Create the following fields (columns):

   | Field Name | Field Type |
   |------------|------------|
   | Name | Single line text |
   | Email | Email |
   | Location | Single line text |
   | Compounds | Single line text |
   | Goals | Long text |
   | Experience | Long text |
   | Background | Single line text |
   | Referral | Single line text |
   | Consent Given | Checkbox |
   | Budget Confirmed | Checkbox |
   | Submitted At | Date & time |

3. The first column should automatically be named "Name" - you can keep it

## Step 4: Get Your Base ID

1. While viewing your base, look at the URL in your browser
2. It will look like: `https://airtable.com/appXXXXXXXXXXXXXX/...`
3. Copy the part that starts with `app` (e.g., `appXw1234567890abc`)
4. This is your **AIRTABLE_BASE_ID**

## Step 5: Create a Personal Access Token

1. Go to [https://airtable.com/create/tokens](https://airtable.com/create/tokens)
2. Click "Create new token"
3. Give it a name like "Peptide Company Website"
4. Under "Scopes", add these permissions:
   - `data.records:write` (to create records)
   - `data.records:read` (optional, for reading)
5. Under "Access", select your base
6. Click "Create token"
7. **Copy the token immediately** - you won't be able to see it again!
8. This is your **AIRTABLE_API_KEY**

## Step 6: Set Up Environment Variables

### For Local Development:

1. In your `peptide-company` directory, create a file called `.env.local`
2. Add your credentials:

```bash
AIRTABLE_API_KEY=patXXXXXXXXXXXXXXXX
AIRTABLE_BASE_ID=appXXXXXXXXXXXXXXXX
AIRTABLE_TABLE_NAME=Applications
```

3. Save the file
4. Restart your dev server: `npm run dev`

### For Production (Vercel):

1. Go to your Vercel project dashboard
2. Click on "Settings" → "Environment Variables"
3. Add three variables:
   - `AIRTABLE_API_KEY` = your token
   - `AIRTABLE_BASE_ID` = your base ID
   - `AIRTABLE_TABLE_NAME` = Applications
4. Redeploy your site

## Step 7: Test the Integration

1. Go to your website's application form
2. Fill it out and submit
3. Check your Airtable base - you should see a new record!

## Viewing Submissions

All form submissions will appear as new rows in your Airtable base. You can:
- View them in grid view (like a spreadsheet)
- Create different views (filtered, sorted, etc.)
- Set up automations (email notifications, Slack alerts, etc.)
- Export to CSV or other formats

## Troubleshooting

**"Server configuration error"**
- Make sure your `.env.local` file exists and has the correct values
- Restart your dev server after adding environment variables

**"Failed to submit application"**
- Check that your Personal Access Token has the right permissions
- Make sure the base ID is correct
- Verify your table name matches exactly (case-sensitive)

**Submissions not showing up**
- Check the Airtable API status
- Look at your server logs for error messages
- Verify your field names match exactly

## Security Notes

- Never commit your `.env.local` file to Git (it's in `.gitignore`)
- Keep your API key secret
- Only share access to your Airtable base with trusted team members
- You can revoke and create new tokens anytime at airtable.com/create/tokens
