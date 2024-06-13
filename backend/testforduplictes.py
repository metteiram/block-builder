import unittest
from duplication_values import remove_duplicates

class TestRemoveDuplicates(unittest.TestCase):
    def test_remove_duplicates(self):
        nums = [1, 1, 2, 2, 3, 3, 4, 5, 5]
        expected_nums = [1, 2, 3, 4, 5]
        expected_lengh=5
        new_lengh = remove_duplicates(nums)
        self.assertEqual(new_lengh,expected_lengh)

    def test_empty_array(self):
        nums = []
        expected_nums = []
        new_lengh = remove_duplicates(nums)
        self.assertEqual(new_lengh, 0)
        self.assertEqual(nums, expected_nums)

    def test_single_element_array(self):
        nums = [1]
        expected_nums = [1]
        new_lengh = remove_duplicates(nums)
        self.assertEqual(new_lengh, 1)
        self.assertEqual(nums[:new_lengh], expected_nums)

    def test_all_duplicates(self):
        nums = [1, 1, 1, 1]
        expected_nums = [1]
        expected_length = 1
        new_length = remove_duplicates(nums)
        self.assertEqual(new_length, expected_length)
        self.assertEqual(nums[:new_length], expected_nums)