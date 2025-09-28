defmodule KitchenCalculator do
  def get_volume(volume_pair) do
    elem(volume_pair, 1)
  end

  def to_milliliter({:milliliter, _} = volume_pair) do
    volume_pair
  end

  def to_milliliter({:cup, _} = volume_pair) do
    {:milliliter, get_volume(volume_pair) * 240}
  end

  def to_milliliter({:fluid_ounce, _} = volume_pair) do
    {:milliliter, get_volume(volume_pair) * 30}
  end

  def to_milliliter({:teaspoon, _} = volume_pair) do
    {:milliliter, get_volume(volume_pair) * 5}
  end

  def to_milliliter({:tablespoon, _} = volume_pair) do
    {:milliliter, get_volume(volume_pair) * 15}
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
