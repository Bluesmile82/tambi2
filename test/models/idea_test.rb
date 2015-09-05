# == Schema Information
#
# Table name: ideas
#
#  id           :integer          not null, primary key
#  x            :float
#  y            :float
#  font_size    :integer
#  concept_id   :integer
#  graph_id     :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  concept_type :string
#  description  :text
#  url          :string
#  picture      :string
#  parent_id    :integer
#

require 'test_helper'

class IdeaTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
