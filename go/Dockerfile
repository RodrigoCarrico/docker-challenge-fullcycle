FROM golang:alpine3.17

WORKDIR /usr/src/app

COPY hello.go hello.go
RUN go build -o fullcycle *.go

CMD ["./fullcycle"]