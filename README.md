# URL Shortener

A modern URL shortening service built with Next.js, featuring a clean UI and robust backend integration.

## Features

- Quick URL shortening with custom slug option
- QR code generation for shortened URLs
- Click analytics and tracking
- User authentication and management
- API endpoints for programmatic access
- Responsive design for all devices - under progress
- Rate limiting to prevent abuse
- URL validation and sanitization

## Tech Stack

- **Frontend:** Next.js 14 with App Router
- **Styling:** Tailwind CSS
- **Database:** PostgreSQL with Prisma ORM
- **Authentication:** NextAuth.js
- **Deployment:** Vercel
- **Analytics:** Custom implementation with PostgreSQL

## Getting Started

### Prerequisites

- Node.js 18.0 or later


### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/url-shortener.git
cd url-shortener
```

2. Install dependencies:
```bash
pnpm install
```

3. Create a `.env` file in the root directory:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/urlshortener"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
```

4. Set up the database:
```bash
pnpm prisma migrate dev
```

5. Start the development server:
```bash
pnpm dev
```

## API Routes

### Create Short URL
```http
POST /api/url
Content-Type: application/json

{
  "originalUrl": "https://example.com",
  "customSlug": "optional-custom-slug"
}
```

### Get URL Analytics
```http
GET /api/url/:id/analytics
```

### Redirect to Original URL
```http
GET /:slug
```

## Database Schema

```prisma
model Url {
  id        String   @id @default(cuid())
  slug      String   @unique
  url       String
  createdAt DateTime @default(now())
  clicks    Click[]
  userId    String?
  user      User?    @relation(fields: [userId], references: [id])
}

model Click {
  id        String   @id @default(cuid())
  urlId     String
  url       Url      @relation(fields: [urlId], references: [id])
  createdAt DateTime @default(now())
  userAgent String?
  ipAddress String?
}
```

## Features in Detail

### URL Shortening
- Automatic short slug generation
- Custom slug option
- Duplicate URL detection
- URL validation and sanitization

### Analytics
- Click tracking
- Geographic data
- Device information
- Time-based analytics
- Export functionality

### Security
- Rate limiting
- URL scanning
- Authentication
- API key management

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@yourdomain.com or open an issue in the GitHub repository.

## Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting and deployment
- Contributors and community members
