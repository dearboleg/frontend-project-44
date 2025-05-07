# Makefile

install: # Запуск npm ci
			npm ci

brain-games: # Запуск node bin/brain-games.js
			node bin/brain-games.js

publish: # Публикация
			npm publish --dry-run

lint: # Запуск eslint 
			npx eslint .

brain-even: # Запуск node bin/brain-even.js
			node bin/brain-even.js