FROM node:14.21.3

# 安裝你的應用所需的任何其他依賴項
RUN apt-get update && apt-get install -y <your-dependencies>

# 設置工作目錄
WORKDIR /workspace

# 複製代碼到工作目錄 (可選)
COPY . /workspace
