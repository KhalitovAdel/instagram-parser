export abstract class InstagramParserAbstract<X = any, Y = any, Z = any> {

  public abstract defaultParse(params?: X): Promise<Y>

  public abstract detailParse(params?: X): Promise<Y & Z>

}