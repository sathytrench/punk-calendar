# Punk Calendar

A community-driven calendar application for punk rock events in New York City, built with the [T3 Stack](https://create.t3.gg/).

## Features

- 🎵 Browse upcoming punk shows and events
- Submit shows
- 🔐 User authentication via Discord

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone this_repo.git
   cd punk-calendar
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
    ```env
    Database URL for PostgreSQL
    DATABASE_URL="postgresql://postgres:password@localhost:5432/punk_calendar"
    Next Auth
    NEXTAUTH_SECRET="your-secret-here"
    NEXTAUTH_URL="http://localhost:3000"
    Discord OAuth
    DISCORD_CLIENT_ID="your-discord-client-id"
    DISCORD_CLIENT_SECRET="your-discord-client-secret"
    ```

4. Start the development database:

   ```bash
   chmod +x ./start-database.sh
   ./start-database.sh
   ```
   Note: Make sure Docker is installed and running on your system.

5. Initialize the database:
   ```bash
   npx prisma db push
   ```

6. Start the development server:
   ```bash
   npm run dev
   ```

Visit `http://localhost:3000` to see the application running.

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Background image from [DeviantArt](https://www.deviantart.com/)
- [T3 Stack](https://create.t3.gg/) for the stack