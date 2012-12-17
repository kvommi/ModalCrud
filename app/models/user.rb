class User < ActiveRecord::Base
  attr_accessible :account_type, :email, :password, :user_name
  validates_presence_of :user_name, :email, :account_type, :password
end
