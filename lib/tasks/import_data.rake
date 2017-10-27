namespace :data do

  desc 'import excel data'
  task :import => :environment do
    xlsx = Roo::Spreadsheet.open "/Users/ganguri/Downloads/sa_da.xlsx"
    xlsx.sheet(0).each_row_streaming(offset: 1, pad_cells: true) do |row|
      if row[1].blank?
        break
      end
      item = Item.new(content: row[1].try(:formatted_value), created_at: row[0].try(:value));

      emotion_titles = []

      emotion_titles << 'Joy' if row[2].present?
      emotion_titles << 'Happy' if row[3].present?
      emotion_titles << 'Satisfied' if row[4].present?
      emotion_titles << 'Depressed' if row[5].present?
      emotion_titles << 'Exhausted' if row[6].present?
      emotion_titles << 'Annoyed' if row[7].present?
      emotion_titles << 'Nervous' if row[8].present?

      emotion_titles.each do |title|
        item.emotions.build(title: title)
      end

      item.save!
    end
  end
end
