# Kanjo
A self-contained node.js microservice for sentiment analysis.

## Docker
Simply just pull and run, and you'll have a live microservice running on port 8000!
```docker run --rm -p 8000:8000 jdleo/kanjo```
The microservice inside the container defaults to port 8000, but you can redirect the port. For example, if you want to redirect the microservice to port 7777, you would do:
```docker run --rm -p 7777:8000 jdleo/kanjo```
