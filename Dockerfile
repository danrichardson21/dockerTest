FROM node:8.14.0-jessie
WORKDIR /app
COPY . /app
RUN cd /app
RUN npm install
RUN npm run build
CMD npm run start
EXPOSE 3000