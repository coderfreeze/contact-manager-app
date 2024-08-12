# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) into the working directory
COPY server-app/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application’s code into the container
COPY server-app .

# Expose the port that the app runs on
EXPOSE 5001

# Command to run the app
CMD ["npm", "run", "start"]
