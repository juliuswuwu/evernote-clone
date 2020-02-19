class Notebook < ApplicationRecord

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    has_many :notes, 
        dependent: :destroy 
end
