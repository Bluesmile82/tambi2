# == Schema Information
#
# Table name: graphs
#
#  id          :integer          not null, primary key
#  title       :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  user_id     :integer
#  description :string
#  public      :boolean          default(FALSE)
#  private     :boolean          default(FALSE)
#

require 'test_helper'

class GraphTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
