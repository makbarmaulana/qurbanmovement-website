import React from 'react';
import { Typography, Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="h-screen mx-auto grid place-items-center text-center px-8">
      <div>
        <Typography
          variant="p"
          className="text-7xl font-bold text-blue-gray-800/50 mb-6"
        >
          404
        </Typography>

        <Typography
          variant="h1"
          className="text-2xl text-blue-gray-800 font-extrabold mb-2"
        >
          Page Not Found
        </Typography>
        <Typography className="text-base font-normal text-gray-500 mb-6">
          Sorry, we couldn’t find the page you’re looking for.
        </Typography>

        <Link to="/">
          <Button className="px-4 bg-orange-600 hover:bg-orange-500 transition">
            back home
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
