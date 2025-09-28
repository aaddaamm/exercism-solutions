defmodule KitchenCalculator do
  def get_volume(volume_pair) do
    elem(volume_pair, 1)
  end

  def to_milliliter({:milliliter, _} = volume_pair) do
    volume_pair
  end

  def to_milliliter({:cup, volume} = volume_pair) do
    {:milliliter, volume * 240}
  end

  def to_milliliter({:fluid_ounce, volume} = volume_pair) do
    {:milliliter, volume * 30}
  end

  def to_milliliter({:teaspoon, volume} = volume_pair) do
    {:milliliter, volume * 5}
  end

  def to_milliliter({:tablespoon, volume} = volume_pair) do
    {:milliliter, volume * 15}
  end

  def from_milliliter({:milliliter, volume} = volume_pair, unit) do
    cond do
      unit == :cup -> {:cup, volume / 240}
      unit == :fluid_ounce -> {:fluid_ounce, volume / 30}
      unit == :teaspoon -> {:teaspoon, volume / 5}
      unit == :tablespoon -> {:tablespoon, volume / 15}
      unit == :milliliter -> volume_pair
    end
  end

  def convert(volume_pair, unit) do
    to_milliliter(volume_pair) |> from_milliliter(unit)
  end
end
