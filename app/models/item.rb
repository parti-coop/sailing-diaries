class Item < ApplicationRecord
  has_many :emotions

  def self.count_emotions(month, emotion_title)
    Emotion.where(title: emotion_title).where(item_id: Item.by_month(month)).count
  end

  def self.count_king_emotions(month)
    Emotion.where(item_id: Item.by_month(month)).group(:title).count.values.max
  end

  def self.count_month(month)
    Emotion.where(item_id: Item.by_month(month)).count
  end

  def self.sizes(total, month)
    result = []
    %w(Joy Happy Satisfied Fun Depressed Exhausted Annoyed Nervous).each do |emotion_title|
      result << size(total, month, emotion_title, result.try(:last) || 0)
    end
    result << result.last + result[0] / 2

    result
  end

  def self.size(total, month, emotion_title, before_size)
    total * count_emotions(month, emotion_title) / count_month(month) + before_size
  end

  def self.ops(max, month)
    result = []
    %w(Joy Happy Satisfied Fun Depressed Exhausted Annoyed Nervous).each do |emotion_title|
      result << max * count_emotions(month, emotion_title) / count_king_emotions(month)
    end
    result
  end
end
