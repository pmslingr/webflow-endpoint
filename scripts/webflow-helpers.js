 ////////////////////////////////////////////////////////////////////////////
//                                                                        //
//             This file was generated with "slingr-helpgen"              //
//                                                                        //
//               For more info, check the following links:                //
//             https://www.npmjs.com/package/slingr-helpgen               //
//           https://github.com/slingr-stack/slingr-helpgen               //
//                                                                        //
////////////////////////////////////////////////////////////////////////////


function parse(str) {
    try {
        if (arguments.length > 1) {
            var args = arguments[1], i = 0;
            return str.replace(/(:(?:\w|-)+)/g, () => {
                if (typeof (args[i]) != 'string') throw new Error('Invalid type of argument: [' + args[i] + '] for url [' + str + '].');
                return args[i++];
            });
        } else {
            if (str) {
                return str;
            }
            throw new Error('No arguments nor url were received when calling the helper. Please check it\'s definition.');
        }
    } catch (err) {
        sys.logs.error('Some unexpected error happened during the parse of the url for this helper.')
        throw err;
    }
}

endpoint.sites = {};

endpoint.sites.list = function(httpOptions) {
	var url = parse('/sites');
	sys.logs.debug('[webflow] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.sites.getById = function(siteId, httpOptions) {
	if (!siteId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
		return;
	}
	var url = parse('/sites/:site_id', [siteId]);
	sys.logs.debug('[webflow] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.sites.publish = function(siteId, httpOptions) {
	if (!siteId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
		return;
	}
	var url = parse('/sites/:site_id/publish', [siteId]);
	sys.logs.debug('[webflow] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.sites.domains = {};

endpoint.sites.domains.list = function(siteId, httpOptions) {
	if (!siteId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
		return;
	}
	var url = parse('/sites/:site_id/domains', [siteId]);
	sys.logs.debug('[webflow] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.sites.collections = {};

endpoint.sites.collections.list = function(siteId, httpOptions) {
	if (!siteId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
		return;
	}
	var url = parse('/sites/:site_id/collections', [siteId]);
	sys.logs.debug('[webflow] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.collections = {};

endpoint.collections.getById = function(collectionId, httpOptions) {
	if (!collectionId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [collectionId].');
		return;
	}
	var url = parse('/collections/:collection_id', [collectionId]);
	sys.logs.debug('[webflow] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.collections.getItems = function(collectionId, httpOptions) {
	if (!collectionId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [collectionId].');
		return;
	}
	var url = parse('/collections/:collection_id/items', [collectionId]);
	sys.logs.debug('[webflow] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.collections.createItem = function(collectionId, httpOptions) {
	if (!collectionId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [collectionId].');
		return;
	}
	var url = parse('/collections/:collection_id/items', [collectionId]);
	sys.logs.debug('[webflow] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.collections.updateItem = function(collectionId, itemId, httpOptions) {
	if (!collectionId || !itemId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [collectionId,itemId].');
		return;
	}
	var url = parse('/collections/:collection_id/items/:item_id', [collectionId, itemId]);
	sys.logs.debug('[webflow] PUT from: ' + url);
	return endpoint.put(url, httpOptions);
};

endpoint.collections.patchItem = function(collectionId, itemId, httpOptions) {
	if (!collectionId || !itemId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [collectionId,itemId].');
		return;
	}
	var url = parse('/collections/:collection_id/items/:item_id', [collectionId, itemId]);
	sys.logs.debug('[webflow] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};

endpoint.collection = {};

endpoint.collection.items = {};

endpoint.collection.items.getById = function(collectionId, itemId, httpOptions) {
	if (!collectionId || !itemId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [collectionId,itemId].');
		return;
	}
	var url = parse('/collections/:collection_id/items/:item_id', [collectionId, itemId]);
	sys.logs.debug('[webflow] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.collection.items.removeItem = function(collectionId, itemId, httpOptions) {
	if (!collectionId || !itemId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [collectionId,itemId].');
		return;
	}
	var url = parse('/collections/:collection_id/items/:item_id', [collectionId, itemId]);
	sys.logs.debug('[webflow] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.users = {};

endpoint.users.list = function(siteId, httpOptions) {
	if (!siteId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
		return;
	}
	var url = parse('/sites/:site_id/users', [siteId]);
	sys.logs.debug('[webflow] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.users.getById = function(siteId, userId, httpOptions) {
	if (!siteId || !userId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,userId].');
		return;
	}
	var url = parse('/sites/:site_id/users/:user_id', [siteId, userId]);
	sys.logs.debug('[webflow] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.users.updateUser = function(siteId, userId, httpOptions) {
	if (!siteId || !userId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,userId].');
		return;
	}
	var url = parse('/sites/:site_id/users/:user_id', [siteId, userId]);
	sys.logs.debug('[webflow] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};

endpoint.users.deleteUser = function(siteId, userId, httpOptions) {
	if (!siteId || !userId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,userId].');
		return;
	}
	var url = parse('/sites/:site_id/users/:user_id', [siteId, userId]);
	sys.logs.debug('[webflow] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.users.invite = function(siteId, httpOptions) {
	if (!siteId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
		return;
	}
	var url = parse('/sites/:site_id/users/invite', [siteId]);
	sys.logs.debug('[webflow] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.products = {};

endpoint.products.list = function(siteId, httpOptions) {
	if (!siteId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
		return;
	}
	var url = parse('/sites/:site_id/products', [siteId]);
	sys.logs.debug('[webflow] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.products.createProduct = function(siteId, httpOptions) {
	if (!siteId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
		return;
	}
	var url = parse('/sites/:site_id/products', [siteId]);
	sys.logs.debug('[webflow] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.products.getById = function(siteId, httpOptions) {
	if (!siteId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
		return;
	}
	var url = parse('/sites/:site_id/products', [siteId]);
	sys.logs.debug('[webflow] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.products.updateProduct = function(siteId, httpOptions) {
	if (!siteId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
		return;
	}
	var url = parse('/sites/:site_id/products', [siteId]);
	sys.logs.debug('[webflow] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};

endpoint.products.skus = {};

endpoint.products.skus.create = function(siteId, productId, httpOptions) {
	if (!siteId || !productId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,productId].');
		return;
	}
	var url = parse('/sites/:site_id/products/:product_id/skus', [siteId, productId]);
	sys.logs.debug('[webflow] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.products.skus.update = function(siteId, productId, httpOptions) {
	if (!siteId || !productId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,productId].');
		return;
	}
	var url = parse('/sites/:site_id/products/:product_id/skus', [siteId, productId]);
	sys.logs.debug('[webflow] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};

endpoint.orders = {};

endpoint.orders.list = function(siteId, httpOptions) {
	if (!siteId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
		return;
	}
	var url = parse('/sites/:site_id/orders', [siteId]);
	sys.logs.debug('[webflow] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.order = {};

endpoint.order.getById = function(siteId, orderId, httpOptions) {
	if (!siteId || !orderId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,orderId].');
		return;
	}
	var url = parse('/sites/:site_id/order/:order_id', [siteId, orderId]);
	sys.logs.debug('[webflow] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.order.update = function(siteId, orderId, httpOptions) {
	if (!siteId || !orderId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,orderId].');
		return;
	}
	var url = parse('/sites/:site_id/order/:order_id', [siteId, orderId]);
	sys.logs.debug('[webflow] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};

endpoint.order.fulfill = function(siteId, orderId, httpOptions) {
	if (!siteId || !orderId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,orderId].');
		return;
	}
	var url = parse('/sites/:site_id/order/:order_id/fulfill', [siteId, orderId]);
	sys.logs.debug('[webflow] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.order.unfulfill = function(siteId, orderId, httpOptions) {
	if (!siteId || !orderId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,orderId].');
		return;
	}
	var url = parse('/sites/:site_id/order/:order_id/unfulfill', [siteId, orderId]);
	sys.logs.debug('[webflow] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.order.refund = function(siteId, orderId, httpOptions) {
	if (!siteId || !orderId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,orderId].');
		return;
	}
	var url = parse('/sites/:site_id/order/:order_id/refund', [siteId, orderId]);
	sys.logs.debug('[webflow] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.collections.items = {};

endpoint.collections.items.inventory = {};

endpoint.collections.items.inventory.list = function(siteId, collectionId, itemId, httpOptions) {
	if (!siteId || !collectionId || !itemId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,collectionId,itemId].');
		return;
	}
	var url = parse('/sites/:site_id/collections/:collection_id/items/:item_id/inventory', [siteId, collectionId, itemId]);
	sys.logs.debug('[webflow] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.collections.items.inventory.update = function(siteId, collectionId, itemId, httpOptions) {
	if (!siteId || !collectionId || !itemId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,collectionId,itemId].');
		return;
	}
	var url = parse('/sites/:site_id/collections/:collection_id/items/:item_id/inventory', [siteId, collectionId, itemId]);
	sys.logs.debug('[webflow] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};

endpoint.webhooks = {};

endpoint.webhooks.list = function(siteId, httpOptions) {
	if (!siteId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
		return;
	}
	var url = parse('/sites/:site_id/webhooks', [siteId]);
	sys.logs.debug('[webflow] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.webhooks.create = function(siteId, httpOptions) {
	if (!siteId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
		return;
	}
	var url = parse('/sites/:site_id/webhooks', [siteId]);
	sys.logs.debug('[webflow] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.webhooks.getById = function(siteId, webhookId, httpOptions) {
	if (!siteId || !webhookId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,webhookId].');
		return;
	}
	var url = parse('/sites/:site_id/webhooks/:webhook_id', [siteId, webhookId]);
	sys.logs.debug('[webflow] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.webhooks.remove = function(siteId, webhookId, httpOptions) {
	if (!siteId || !webhookId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,webhookId].');
		return;
	}
	var url = parse('/sites/:site_id/webhooks/:webhook_id', [siteId, webhookId]);
	sys.logs.debug('[webflow] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

