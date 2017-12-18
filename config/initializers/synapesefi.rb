args = {
  # synapse client_id
  client_id:        ENV.fetch('CLIENT_ID'),
  # synapse client_secret
  client_secret:    ENV.fetch('CLIENT_SECRET'),
  # a hashed value, either unique to user or static for app
  # the user's IP
  ip_address:       '127.0.0.1',
  # (optional) requests go to sandbox endpoints if true
  development_mode: true,
  # (optional) if true logs requests to stdout
  logging:          true,
  # (optional) file path to write logs to
  log_to:           nil
}

client = SynapsePayRest::Client.new(args)



# user_create_settings = {
#   client:        client,
#   logins:        [{email: 'steven@synapsepay.com'}],
#   phone_numbers: ['555-555-5555'],
#   legal_names:   ['Steven Broderick']
# }

# user = SynapsePayRest::User.create(user_create_settings)
# # => #<SynapsePayRest::User>