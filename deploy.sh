#!/bin/bash

# Navegar e iniciar o builder
cd /home/typebot/public_html/apps/builder || exit
pm2 start --name=typebot-builder bun -- start -p 3302

# Navegar e iniciar o viewer
cd /home/typebot/public_html/apps/viewer || exit
pm2 start --name=typebot-viewer bun -- start -p 3301

# Navegar e iniciar o landing
cd /home/typebot/public_html/apps/landing || exit
pm2 start --name=typebot-landing bun -- start -p 3303

echo "Todos os aplicativos foram iniciados com sucesso!"

