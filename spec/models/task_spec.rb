# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Task, type: :model do
  it { should belong_to(:column) }
  it { should validate_presence_of(:title) }
  it { should validate_numericality_of(:position).only_integer }
end

