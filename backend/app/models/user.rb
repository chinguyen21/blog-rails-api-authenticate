class User < ApplicationRecord
  validates :email, presence: true
  validates :age, presence: true
  
  has_secure_password
end


