# Kanjo
A self-contained node.js microservice for sentiment analysis.

## Docker
Simply just pull and run, and you'll have a live microservice running on port 8000!  
```docker run --rm -p 8000:8000 jdleo/kanjo```  
  
The microservice inside the container defaults to port 8000, but you can redirect the port. For example, if you want to redirect the microservice to port 7777, you would do:  
```docker run --rm -p 7777:8000 jdleo/kanjo```

If you just want to pull the image, do:  
```docker pull jdleo/kanjo```

## Using the microservice  
The endpoint for sentiment analysis lies at ```localhost:8000/analyze```  
  
Pass the body of text as a "text" parameter in a POST request to get the results.  
For example, here's a sample cURL command:  
```bash
curl -X POST \
  http://localhost:8000/analyze \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Postman-Token: a9b2a426-7b35-47de-92a2-49455d401459' \
  -d text=text%20goes%20here```
