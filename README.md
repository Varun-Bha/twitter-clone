#Twitter Clone

A full-stack Twitter clone built with React.js, Next.js, TailwindCSS, Prisma, MongoDB, NextAuth.js, and Vercel. This project demonstrates a modern, production-ready social media platform with authentication, posting, liking, following, and more.

## 🚀 Features
- User authentication (register, login, logout) with NextAuth.js
- Create, like, and comment on posts ("tweets")
- Responsive, modern UI with TailwindCSS
- Follow/unfollow users and see suggestions
- Real-time feedback with react-hot-toast
- Profile management (bio, images, etc.)
- Secure password hashing with bcrypt
- State management with Zustand
- File uploads with react-dropzone
- API routes for all core features

## 🛠️ Tech Stack
- **Frontend:** React 19, Next.js 15, TailwindCSS
- **Backend:** Next.js API routes, Prisma ORM
- **Database:** MongoDB (via Prisma)
- **Authentication:** NextAuth.js (credentials provider, JWT)
- **State Management:** Zustand, SWR
- **UI/UX:** TailwindCSS, React Icons, react-hot-toast
- **Other:** Axios, date-fns, react-dropzone

## 📦 Project Structure
```
components/      # UI components (modals, layout, posts, etc.)
hooks/           # Custom React hooks (auth, user, posts, etc.)
libs/            # Utility libraries (Prisma client, fetcher, etc.)
pages/           # Next.js pages and API routes
prisma/          # Prisma schema and migrations
public/          # Static assets (images, icons)
styles/          # Global styles (TailwindCSS)
```

## ⚙️ Setup & Installation
1. **Clone the repository:**
   ```bash
   git clone git@github.com:Varun-Bha/twitter-clone.git
   cd twitter-clone
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Configure environment variables:**
   - Create a `.env` file in the root directory with the following variables:
     ```env
     DATABASE_URL="<your-mongodb-connection-string>"
     NEXTAUTH_SECRET="<your-random-secret>"
     NEXTAUTH_JWT_SECRET="<your-jwt-secret>"
     ```
4. **Push Prisma schema to the database:**
   ```bash
   npx prisma db push
   ```
5. **Run the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000)

## 📝 Scripts
- `npm run dev` — Start the development server
- `npm run build` — Build for production
- `npm start` — Start the production server
- `npm run lint` — Run ESLint

## 🧩 Environment Variables
| Variable              | Description                        |
|-----------------------|------------------------------------|
| `DATABASE_URL`        | MongoDB connection string          |
| `NEXTAUTH_SECRET`     | NextAuth.js secret                 |
| `NEXTAUTH_JWT_SECRET` | JWT secret for NextAuth.js         |

## 🗄️ Database Schema (Prisma)
- **User**: id, name, username, bio, email, image, coverImage, profileImage, hashedPassword, followingIds, hasNotification, posts, comments, notifications
- **Post**: id, body, createdAt, updatedAt, userId, likedIds, image, comments
- **Comment**: id, body, createdAt, updatedAt, userId, postId
- **Notification**: id, body, userId, createdAt

## 🤝 Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## 📄 License
This project is licensed under the MIT License.

---

> Built with ❤️ using the modern React ecosystem.
