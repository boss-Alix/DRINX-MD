FROM node:lts-buster
RUN git clone https://github.com/boss-alix/DRINX-MD
WORKDIR /root/DRINX-MD/index.js
RUN npm install -g pm2 && npm install || npm install baileys@github:XdKing2/baileys
COPY . .
EXPOSE 9090
CMD ["npm", "start"]
