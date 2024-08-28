# 1. Node.js 기본 이미지 사용
FROM node:lts

# 2. 작업 디렉토리 설정
WORKDIR /app

# 3. 패키지 파일 복사
COPY package.json package-lock.json ./

# 4. 의존성 설치
RUN npm install

# 5. 애플리케이션 소스 복사
COPY . .

# 6. 빌드
RUN npm run build

# 10. Nginx 시작
CMD ["npm", "start"]