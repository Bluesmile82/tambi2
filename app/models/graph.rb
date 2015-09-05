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

class Graph < ActiveRecord::Base
  has_many :ideas, dependent: :destroy
  belongs_to :user
  validates :title, presence: true
end
