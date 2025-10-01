defmodule HighScore do
  @constant_number 0
  @empty_map %{}
  def new() do
    @empty_map
  end

  def add_player(scores, name, score \\ @constant_number) do
    Map.merge(scores, %{name => score})
  end

  def remove_player(scores, name) do
    Map.delete(scores, name)
  end

  def reset_score(scores, name) do
    Map.update(scores, name, 0, fn _ -> @constant_number end)
  end

  def update_score(scores, name, score) do
    Map.update(scores, name, score, fn curr -> curr + score end)
  end

  def get_players(scores) do
    Map.keys(scores)
  end
end
