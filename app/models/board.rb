class Board < ApplicationRecord

  validates_presence_of :title

  has_many :columns, dependent: :destroy

end

