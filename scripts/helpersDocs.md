# Javascript API

The Javascript API of the webflow endpoint has three pieces:

- **HTTP requests**: These allows to make regular HTTP requests.
- **Shortcuts**: These are helpers to make HTTP request to the API in a more convenient way.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the endpoint usage in SLINGR.

## HTTP requests
You can make `GET`,`POST`,`PUT`,`PATCH`,`DELETE` requests to the [webflow API](API_URL_HERE) like this:
```javascript
var response = app.endpoints.webflow.get('/sites/:site_id')
var response = app.endpoints.webflow.post('/sites/:site_id/order/:order_id/fulfill', body)
var response = app.endpoints.webflow.put('/collections/:collection_id/items/:item_id', body)
var response = app.endpoints.webflow.patch('/collections/:collection_id/items/:item_id', body)
var response = app.endpoints.webflow.delete('/sites/:site_id/users/:user_id')
```

Please take a look at the documentation of the [HTTP endpoint](https://github.com/slingr-stack/http-endpoint#javascript-api)
for more information about generic requests.

## Shortcuts

Instead of having to use the generic HTTP methods, you can (and should) make use of the helpers provided in the endpoint:
<details>
    <summary>Click here to see all the helpers</summary>

<br>

* API URL: '/sites'
* HTTP Method: 'GET'
* More info: https://developers.webflow.com/#list-sites
```javascript
app.endpoints.webflow.sites.list()
```
---
* API URL: '/sites/:site_id'
* HTTP Method: 'GET'
* More info: https://developers.webflow.com/#get-site
```javascript
app.endpoints.webflow.sites.getById(siteId)
```
---
* API URL: '/sites/:site_id/domains'
* HTTP Method: 'GET'
* More info: https://developers.webflow.com/#domains
```javascript
app.endpoints.webflow.sites.domains.list(siteId)
```
---
* API URL: '/sites/:site_id/collections'
* HTTP Method: 'GET'
* More info: https://developers.webflow.com/#list-collections
```javascript
app.endpoints.webflow.sites.collections.list(siteId)
```
---
* API URL: '/collections/:collection_id'
* HTTP Method: 'GET'
* More info: https://developers.webflow.com/#get-collection
```javascript
app.endpoints.webflow.collections.getById(collectionId)
```
---
* API URL: '/collections/:collection_id/items'
* HTTP Method: 'GET'
* More info: https://developers.webflow.com/#get-items
```javascript
app.endpoints.webflow.collections.getItems(collectionId)
```
---
* API URL: '/collections/:collection_id/items/:item_id'
* HTTP Method: 'GET'
* More info: https://developers.webflow.com/#get-item
```javascript
app.endpoints.webflow.collection.items.getById(collectionId, itemId)
```
---
* API URL: '/sites/:site_id/users'
* HTTP Method: 'GET'
* More info: https://developers.webflow.com/#list-users
```javascript
app.endpoints.webflow.users.list(siteId)
```
---
* API URL: '/sites/:site_id/users/:user_id'
* HTTP Method: 'GET'
* More info: https://developers.webflow.com/#get-user
```javascript
app.endpoints.webflow.users.getById(siteId, userId)
```
---
* API URL: '/sites/:site_id/products'
* HTTP Method: 'GET'
* More info: https://developers.webflow.com/#list-products
```javascript
app.endpoints.webflow.products.list(siteId)
```
---
* API URL: '/sites/:site_id/products'
* HTTP Method: 'GET'
* More info: https://developers.webflow.com/#get-product
```javascript
app.endpoints.webflow.products.getById(siteId)
```
---
* API URL: '/sites/:site_id/orders'
* HTTP Method: 'GET'
* More info: https://developers.webflow.com/#list-orders
```javascript
app.endpoints.webflow.orders.list(siteId)
```
---
* API URL: '/sites/:site_id/order/:order_id'
* HTTP Method: 'GET'
* More info: https://developers.webflow.com/#get-order
```javascript
app.endpoints.webflow.order.getById(siteId, orderId)
```
---
* API URL: '/sites/:site_id/collections/:collection_id/items/:item_id/inventory'
* HTTP Method: 'GET'
* More info: https://developers.webflow.com/#list-inventory
```javascript
app.endpoints.webflow.collections.items.inventory.list(siteId, collectionId, itemId)
```
---
* API URL: '/sites/:site_id/webhooks'
* HTTP Method: 'GET'
* More info: https://developers.webflow.com/#list-webhooks
```javascript
app.endpoints.webflow.webhooks.list(siteId)
```
---
* API URL: '/sites/:site_id/webhooks/:webhook_id'
* HTTP Method: 'GET'
* More info: https://developers.webflow.com/#get-webhook
```javascript
app.endpoints.webflow.webhooks.getById(siteId, webhookId)
```
---
* API URL: '/sites/:site_id/publish'
* HTTP Method: 'POST'
* More info: https://developers.webflow.com/#publish-site
```javascript
app.endpoints.webflow.sites.publish(siteId, body)
```
---
* API URL: '/collections/:collection_id/items'
* HTTP Method: 'POST'
* More info: https://developers.webflow.com/#create-item
```javascript
app.endpoints.webflow.collections.createItem(collectionId, body)
```
---
* API URL: '/sites/:site_id/users/invite'
* HTTP Method: 'POST'
* More info: https://developers.webflow.com/#invite-user
```javascript
app.endpoints.webflow.users.invite(siteId, body)
```
---
* API URL: '/sites/:site_id/products'
* HTTP Method: 'POST'
* More info: https://developers.webflow.com/#create-product
```javascript
app.endpoints.webflow.products.createProduct(siteId, body)
```
---
* API URL: '/sites/:site_id/products/:product_id/skus'
* HTTP Method: 'POST'
* More info: https://developers.webflow.com/#create-sku
```javascript
app.endpoints.webflow.products.skus.create(siteId, productId, body)
```
---
* API URL: '/sites/:site_id/order/:order_id/fulfill'
* HTTP Method: 'POST'
* More info: https://developers.webflow.com/#fullfit-order
```javascript
app.endpoints.webflow.order.fulfill(siteId, orderId, body)
```
---
* API URL: '/sites/:site_id/order/:order_id/unfulfill'
* HTTP Method: 'POST'
* More info: https://developers.webflow.com/#unfullfit-order
```javascript
app.endpoints.webflow.order.unfulfill(siteId, orderId, body)
```
---
* API URL: '/sites/:site_id/order/:order_id/refund'
* HTTP Method: 'POST'
* More info: https://developers.webflow.com/#refund-order
```javascript
app.endpoints.webflow.order.refund(siteId, orderId, body)
```
---
* API URL: '/sites/:site_id/webhooks'
* HTTP Method: 'POST'
* More info: https://developers.webflow.com/#create-webhook
```javascript
app.endpoints.webflow.webhooks.create(siteId, body)
```
---
* API URL: '/collections/:collection_id/items/:item_id'
* HTTP Method: 'PUT'
* More info: https://developers.webflow.com/#update-item
```javascript
app.endpoints.webflow.collections.updateItem(collectionId, itemId, body)
```
---
* API URL: '/collections/:collection_id/items/:item_id'
* HTTP Method: 'PATCH'
* More info: https://developers.webflow.com/#patch-item
```javascript
app.endpoints.webflow.collections.patchItem(collectionId, itemId, body)
```
---
* API URL: '/sites/:site_id/users/:user_id'
* HTTP Method: 'PATCH'
* More info: https://developers.webflow.com/#update-user
```javascript
app.endpoints.webflow.users.updateUser(siteId, userId, body)
```
---
* API URL: '/sites/:site_id/products'
* HTTP Method: 'PATCH'
* More info: https://developers.webflow.com/#update-product
```javascript
app.endpoints.webflow.products.updateProduct(siteId, body)
```
---
* API URL: '/sites/:site_id/products/:product_id/skus'
* HTTP Method: 'PATCH'
* More info: https://developers.webflow.com/#update-sku
```javascript
app.endpoints.webflow.products.skus.update(siteId, productId, body)
```
---
* API URL: '/sites/:site_id/order/:order_id'
* HTTP Method: 'PATCH'
* More info: https://developers.webflow.com/#update-order
```javascript
app.endpoints.webflow.order.update(siteId, orderId, body)
```
---
* API URL: '/sites/:site_id/collections/:collection_id/items/:item_id/inventory'
* HTTP Method: 'PATCH'
* More info: https://developers.webflow.com/#update-inventory
```javascript
app.endpoints.webflow.collections.items.inventory.update(siteId, collectionId, itemId, body)
```
---
* API URL: '/collections/:collection_id/items/:item_id'
* HTTP Method: 'DELETE'
* More info: https://developers.webflow.com/#remove-item
```javascript
app.endpoints.webflow.collection.items.removeItem(collectionId, itemId)
```
---
* API URL: '/sites/:site_id/users/:user_id'
* HTTP Method: 'DELETE'
* More info: https://developers.webflow.com/#delete-user
```javascript
app.endpoints.webflow.users.deleteUser(siteId, userId)
```
---
* API URL: '/sites/:site_id/webhooks/:webhook_id'
* HTTP Method: 'DELETE'
* More info: https://developers.webflow.com/#remove-webhook
```javascript
app.endpoints.webflow.webhooks.remove(siteId, webhookId)
```
---

</details>

For more information about how shortcuts work, and how they are generated, take a look at the [slingr-helpgen tool](https://github.com/slingr-stack/slingr-helpgen).

## Additional Helpers
*MANUALLY ADD THE DOCUMENTATION OF THESE HELPERS HERE...*