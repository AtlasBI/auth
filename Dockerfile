FROM node:19

# RUN mkdir -p /usr/src/appDF/
WORKDIR /usr/src/atlas/auth/

# Install Nest CLI
RUN npm i -g @nestjs/cli

COPY package*.json ./

RUN npm i

COPY . .

# ENV TZ=Europe/Kyiv
ENV PORT 3000

EXPOSE ${PORT}

# VOLUME [ "/node_modules", "/dist" ]

RUN npm run build

CMD ["node", "dist/main.js"]