#  Copyright 2020 IBM
#
#   Licensed under the Apache License, Version 2.0 (the "License");
#   you may not use this file except in compliance with the License.
#   You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
#   Unless required by applicable law or agreed to in writing, software
#   distributed under the License is distributed on an "AS IS" BASIS,
#   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#   See the License for the specific language governing permissions and
#   limitations under the License.

# Client App
FROM node:alpine as frontend
WORKDIR /usr/src/app
COPY /frontend/package.json /frontend/package.json
RUN npm install --silent
COPY . .
RUN ng build --prod

# Backend
FROM node:alpine as backend
RUN apk update && apk upgrade
ADD /backend/package.json /backend/package.json
RUN cd /backend && npm install && npm run build 
COPY /backend/dist /backend/dist
RUN chmod -R u+x /backend && \
    chgrp -R 0 /backend && \
    chmod -R g=u /backend /etc/passwd

# Final image
FROM node:12-alpine
WORKDIR /usr/src/app
COPY --from=backend /backend/dist /usr/src/app/backend/dist
COPY --from=frontend /usr/src/app/dist ./
EXPOSE 4000
# CMD ["node", "server.js"]
CMD ["npm", "start"]