import AnimalApi from '../index';

describe('Animal API', () => {
  it('gets dogs', async () => {
    const dog = await AnimalApi.getDog();
    expect(dog.imageSrc).not.toBeUndefined();
    expect(dog.text).toBe('DOG');
  });
});
