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

brain-calc: # Запуск node bin/brain-calc.js
			node bin/brain-calc.js

brain-gcd: # Запуск node bin/brain-gcd.js
			node bin/brain-gcd.js

brain-progression: # Запуск node bin/brain-progression.js
			node bin/brain-progression.js
