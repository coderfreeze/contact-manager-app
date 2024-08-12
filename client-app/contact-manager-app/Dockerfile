# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) into the working directory
COPY client-app/contact-manager-app/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application’s code into the container
COPY client-app/contact-manager-app .

# Build the application
RUN npm run build

# Expose the port that the app runs on
EXPOSE 3000

# Command to run the app
CMD ["npm", "run", "preview"]
