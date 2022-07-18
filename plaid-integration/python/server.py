import plaid
from plaid.api import plaid_api
from plaid.model.item_public_token_exchange_request import ItemPublicTokenExchangeRequest
from plaid.model.link_token_create_request import LinkTokenCreateRequest
from plaid.model.link_token_create_request_user import LinkTokenCreateRequestUser
from plaid.model.products import Products
from plaid.model.accounts_get_request import AccountsGetRequest
from plaid.model.country_code import CountryCode
from flask import Flask
from flask import render_template
from flask import request
from flask import jsonify
import time
import os
import json
from plaid.exceptions import ApiException
from flask_cors import CORS



app = Flask(__name__)
CORS(app)

# Fill in your Plaid API keys - https://dashboard.plaid.com/account/keys
PLAID_CLIENT_ID = os.getenv('PLAID_CLIENT_ID')
PLAID_SECRET = os.getenv('PLAID_SECRET')
# Use 'sandbox' to test with Plaid's Sandbox environment (username: user_good,
# password: pass_good)
# Use `development` to test with live users and credentials and `production`
# to go live
PLAID_ENV = os.getenv('PLAID_ENV', 'development')
# PLAID_PRODUCTS is a comma-separated list of products to use when initializing
# Link. Note that this list must contain 'assets' in order for the app to be
# able to create and retrieve asset reports.
PLAID_PRODUCTS = os.getenv('PLAID_PRODUCTS', 'transactions').split(',')

# PLAID_COUNTRY_CODES is a comma-separated list of countries for which users
# will be able to select institutions from.
PLAID_COUNTRY_CODES = os.getenv('PLAID_COUNTRY_CODES', 'US').split(',')

configuration = plaid.Configuration(
  host=plaid.Environment.Development,
  api_key={
    'clientId': PLAID_CLIENT_ID,
    'secret': PLAID_SECRET,
  }
)
api_client = plaid.ApiClient(configuration)
client = plaid_api.PlaidApi(api_client)
# We store the access_token in memory - in production, store it in a secure
# persistent data store.
access_token = None
# The payment_id is only relevant for the UK Payment Initiation product.
# We store the payment_id in memory - in production, store it in a secure
# persistent data store.
payment_id = None
# The transfer_id is only relevant for Transfer ACH product.
# We store the transfer_id in memomory - in produciton, store it in a secure
# persistent data store
transfer_id = None

item_id = None

print('hi')

@app.route("/api/create_link_token", methods=['POST'])
def create_link_token():
  try:
    print("hello")
    # Get the client_user_id by searching for the current user
    # Create a link_token for the given user
    request = LinkTokenCreateRequest(
            products=[Products("auth")],
            client_name="Plaid Test App",
            country_codes=[CountryCode('US')],
            language='en',
            user=LinkTokenCreateRequestUser(
                client_user_id=str(time.time())
            )
        )
    response = client.link_token_create(request)
    # Send the data to the client
    return jsonify(response.to_dict())
  except plaid.ApiException as e:
    return json.loads(e.body)

if __name__ == "__main__":
    app.run(port=8080, debug=True)