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

class Idea < ActiveRecord::Base
  belongs_to :concept
  belongs_to :graph
  has_many :tags
  has_many :links, foreign_key: "idea_a_id", dependent: :destroy

  has_many :idea_bs, through: :links, source: :idea_b
  has_many :reverse_links, foreign_key: "idea_b_id",
              class_name: "Link", dependent: :destroy
  has_many :idea_as, through: :reverse_links, source: :idea_a

  def link!(idea_b)
    self.links.create(idea_a_id: id, idea_b_id: idea_b.id, user_id: graph.user.id )
  end
end
