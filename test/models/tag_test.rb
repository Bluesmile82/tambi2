# == Schema Information
#
# Table name: tags
#
#  id         :integer          not null, primary key
#  concept_id :integer
#  idea_id    :integer
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class TagTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
