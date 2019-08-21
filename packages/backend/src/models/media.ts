import { db } from '../data'
import { ESTATE_TABLE, MEDIA_TABLE, MEDIA_ESTATE_TABLE } from './constants'

class MediaConnector {
  static async getEstateMedias(id) {
    return db
      .table(ESTATE_TABLE)
      .select('media.*')
      .innerJoin(
        MEDIA_ESTATE_TABLE,
        `${ESTATE_TABLE}.id`,
        `${MEDIA_ESTATE_TABLE}.estate_id`,
      )
      .innerJoin(
        MEDIA_TABLE,
        `${MEDIA_TABLE}.id`,
        `${MEDIA_ESTATE_TABLE}.media_id`,
      )
      .where(`${ESTATE_TABLE}.id`, '=', id)
  }

  static async deleteEstateMedias(ids: string[]) {
    await db(MEDIA_ESTATE_TABLE)
      .whereIn('media_id', ids)
      .delete()

    await db(MEDIA_TABLE)
      .whereIn('id', ids)
      .delete()
  }

  static async createEstateMedias(estateId: string, medias: { url: string }[]) {
    const createdMedias = await db
      .table(MEDIA_TABLE)
      .insert(medias)
      .returning('id')

    await db
      .table('media_estate')
      .insert(createdMedias.map(id => ({ estate_id: estateId, media_id: id })))
  }
}

export default MediaConnector
