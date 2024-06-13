def remove_duplicates(nums):
    if not nums:
        return 0

    insert_position=1

    for i in range(1, len(nums)):
        if nums[i]!=nums[i-1]:
            insert_position+=1
    return insert_position

nums = [1,1,2,2,3,3,4,5,5]

new_leght=remove_duplicates(nums)
print(new_leght)