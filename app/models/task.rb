class Task < ApplicationRecord
  
  validates_presence_of :title
  validates_numericality_of :position, :only_integer => true 


  belongs_to :column

end

