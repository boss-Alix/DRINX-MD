FROM node:lts-buster
RUN git clone https://github.com/boss-alix/DRINX-MD
WORKDIR /root/DRINX-MD
RUN npm install && npm install -g pm2 || yarn install --network-concurrency 1
COPY . .
EXPOSE 9090
CMD ["npm", "start"]
